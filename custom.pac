function FindProxyForURL(url, host) {
 if (isPlainHostName(host) || dnsDomainIs(host, 'openai.com'))
    return 'PROXY artloop.ru:32783'
 if (isPlainHostName(host) || dnsDomainIs(host, 'chatgpt.com'))
    return 'PROXY artloop.ru:32783'
 if (isPlainHostName(host) || dnsDomainIs(host, 'instagram.com'))
    return 'PROXY artloop.ru:32783'
 if (isPlainHostName(host) || dnsDomainIs(host, 'facebook.com'))
    return 'PROXY artloop.ru:32783'
 if (isPlainHostName(host) || dnsDomainIs(host, '.fbcdn.net'))
    return 'PROXY artloop.ru:32783'
 else 
    return 'DIRECT'
}
