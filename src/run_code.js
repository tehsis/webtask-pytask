import $ from 'jquery';

export default function(code) {
  return $.ajax({
    url: 'https://webtask.it.auth0.com/api/run/wt-tehsis-gmail_com-1?' + code,
    method: 'POST',
    data: {
      script: code
    },
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjIifQ.eyJqdGkiOiI4MThhNGJhNzE2NmI0YmVlYjEyYjRiZTZhZWRhMjJjMyIsImlhdCI6MTQzMDU5NTIyMywiZHIiOjEsImNhIjpbImQ0N2QzYjM0ZDJiNzRhMGQ5Y2M4MDk4NzhkNzFkOGNkIl0sImRkIjowLCJ1cmwiOiJodHRwOi8vdGVoc2lzLmdpdGh1Yi5pby93ZWJ0YXNrLXB5dGFzay90YXNrcy9weXRhc2suanMiLCJ0ZW4iOiIvXnd0LXRlaHNpcy1nbWFpbF9jb20tWzAtMV0kLyIsIm1iIjoxLCJwYiI6MSwibHRzIjoxfQ.tEUmifLGbewryV4QyDu2pI0bivQvSBPJU5LTcXbNzuc'
    },
  });
}
