// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.


const domainName = (url)=>{
    let www = url.includes('www')
    let http = url.includes('http')
    let result = url.split('//')
    result = http ? result[1] : result[0]
    result = result.split('.')
    return www ? result[1] : result[0]
}

console.log(domainName('http://www.google.com'))