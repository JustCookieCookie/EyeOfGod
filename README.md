# Eye of God
A simple god's eye written in pure JavaScript, HTML and CSS. From the options there are search by phone number, email, IP-Address and metadata.

# Quick start
First, you will need to register on the Abstract API website. Then in the menu we will need 3 items (i.e. 3 different APIs), they are Email Validation, Phone Validation and IP Geolocation. Then we go and copy Primary Key, in the code we should paste it instead of ``your_api_key`` in the corresponding functions ``dataPhoneNumber()``, ``dataEmail()`` and ``ipAddress()``. Let me remind you that these should be 3 different APIs!

Further for convenience you can somewhere to host our static site.

To use it, you have to enter the appropriate data and then select from the list what you have entered. If we select Metadata, we don't need to write anything, but upload a photo. We receive the response as JSON format. ❤️
