const fs = require('fs');

fs.readFile('eventbrite.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    var keys = JSON.parse(content);
    console.log(keys.token)

    const eventbrite = require('eventbrite').default;
    // Create configured Eventbrite SDK
    const sdk = eventbrite({ token: keys.token });

    // See: https://www.eventbrite.com/developer/v3/endpoints/users/#ebapi-get-users-id
    sdk.request('/users/me').then(res => {
console.log(res)    });

});


