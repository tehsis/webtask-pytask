import $ from 'jquery';

export default function(code) {
  return $.ajax({
    url: 'https://webtask.it.auth0.com/api/run/wt-tehsis-gmail_com-1?' + code,
    method: 'POST',
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjIifQ.eyJqdGkiOiJlZDNhN2Y5ZmM0ZWU0YTM5OWZmM2VjZGMzYzJjMmE0ZCIsImlhdCI6MTQzMDU0MTM5MywiY2EiOlsiZDQ3ZDNiMzRkMmI3NGEwZDljYzgwOTg3OGQ3MWQ4Y2QiXSwiZGQiOjAsInVybCI6Imh0dHA6Ly90ZWhzaXMuZ2l0aHViLmlvL3dlYnRhc2stcHl0YXNrL3Rhc2tzL3B5dGFzay5qcyIsInRlbiI6Ii9ed3QtdGVoc2lzLWdtYWlsX2NvbS1bMC0xXSQvIn0.cdKARQ6DjTsZhh0-kwgWAgq_p7HaPf5c2hE157gu-K8'
    },
  });
}
