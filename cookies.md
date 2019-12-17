                       COOKIES / SESSIONS

- HTTP AND HTTPS are stateless - no memories
- cookies are small files that store information, client side
- every request send the cookie back and forth during the req, res cycle

- A session is a way to store large amounts of data on the server side, rather than set all the information in a cookie.

- A session saves data using a unique SESSION ID

COOKIES

- Client side
- When using cookies you have to inform visitors according to EU laws
- expiration can be set although the user can change it - default is 24 minutes
- COOKIES ARE NOT SAFE! Its very easy to read and write cookie contents
- Data is sent back to the server for every HTTP request (HTML, CSS, images, JS) = this increases the amount of traffic
- Sensitive data should NEVER be stored in cookies

SESSIONS

- stored server side
- legally you have to inform the user, but...thre is no clear precedent
- safer than cookies
- expiration is reset when the user refreshes or closes the page
- sessions use cookies
