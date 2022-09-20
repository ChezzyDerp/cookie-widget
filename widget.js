
const widgetDomain = 'https://chezzyderp.github.io/cookie-widget/' 

// Get cookie value by name
const getCookieByName = (name) =>{
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));

    return matches ? decodeURIComponent(matches[1]) : undefined;
}

const setCookieSkipped = () => {

    const futureDate = new Date()
    const time = futureDate.getTime()
    const expireTime = time + 1000 * 36000
    futureDate.setTime(expireTime)

    const expires = futureDate.toUTCString()
  
    let updatedCookie = `cookiesWidgetSkipped=true;expires=${expires}`

    // Set cookie and remove notification
    document.cookie = updatedCookie;
    document.getElementsByClassName('cookie_widget')[0].remove()
}
  
cookiesWidgetSkipped = getCookieByName('cookiesWidgetSkipped')

if(!cookiesWidgetSkipped){

    // Create accept button
    _acceptButton = document.createElement('button')
    _acceptButton.innerText = 'Accept'
    _acceptButton.onclick =  () => setCookieSkipped()

    // Write widget layout 
    document.write(` 
        <div class="cookie_widget">
            <div class="cookie_widget_wrap">
                <img src="${widgetDomain}/cookie.svg" alt="">
                <div class="cookie_widget_texts">
                        <p class="cookie_widget_title">
                            Cookie!
                        </p>
                        <p class="cookie_widget_text">
                            We use cookies and other tracking technologies to improve your browsing experience on our website,
                            to show you personalized content and targeted ads, to analyze our website traffic, and to understand where our visitors are coming from. 
                        </p>
                </div>
            </div>
        </div>
    `)

    // Append button to widget layout
    document.getElementsByClassName('cookie_widget')[0].appendChild(_acceptButton)
}

