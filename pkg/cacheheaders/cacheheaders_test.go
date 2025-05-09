package cacheheaders

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestCacheControl(t *testing.T) {
	testCases := []struct {
		cacheControl *CacheControl
		header       string
	}{
		{&CacheControl{
			Public:               true,
			MaxAge:               42,
			StaleWhileRevalidate: 43,
		},
			"public, max-age=42, stale-while-revalidate=43",
		},
		{&CacheControl{},
			"private, max-age=0, stale-while-revalidate=0",
		},
		{&CacheControl{
			Public:               true,
			MaxAge:               -1,
			StaleWhileRevalidate: -1,
			MustRevalidate:       true,
		},
			"public, must-revalidate",
		},
		{
			nil,
			"",
		},
	}
	for _, tc := range testCases {
		t.Run(tc.header, func(t *testing.T) {
			var rc httptest.ResponseRecorder
			headers := New(tc.cacheControl, "")
			headers.Set(nil, &rc, nil)
			result := rc.Result()
			defer result.Body.Close()
			assert.Equal(t, tc.header, result.Header.Get("Cache-Control"))
		})
	}
}

// FIXME: this test is not working
func XTestETag(t *testing.T) {
	headers := New(nil, "")

	r, err := http.NewRequest("GET", "http://example.com", nil)
	assert.NoError(t, err, "invalid request")

	var rc1 httptest.ResponseRecorder
	headers.Set(r, &rc1, nil)
	result1 := rc1.Result()
	defer result1.Body.Close()
	assert.Len(t, result1.Header["Etag"], 0)

	var rc2 httptest.ResponseRecorder
	headers.Set(r, &rc2, []byte("something"))
	result2 := rc2.Result()
	defer result2.Body.Close()
	assert.Len(t, result2.Header["Etag"], 1)

	// Our ETag headers should be weak etags
	assert.Equal(t, "W", string(result2.Header["Etag"][0][0]))
}

// FIXME: this test is not working
func XTestNotModified(t *testing.T) {
	headers := New(nil, "")

	r, err := http.NewRequest("GET", "http://example.com", nil)
	assert.NoError(t, err, "invalid request")

	var rc1 httptest.ResponseRecorder
	headers.Set(r, &rc1, []byte("something"))
	response := rc1.Result()
	defer response.Body.Close()
	etag := response.Header["Etag"][0]
	assert.NotEqual(t, "", etag)

	var rc2 httptest.ResponseRecorder
	rc2.Header()["ETag"] = []string{etag}

	assert.False(t, headers.NotModified(r, &rc2))

	r.Header.Add("If-None-Match", etag)
	assert.True(t, headers.NotModified(r, &rc2))
	response2 := rc2.Result()
	defer response2.Body.Close()
	assert.Equal(t, response2.StatusCode, http.StatusNotModified)
}
