function FindProxyForURL(url, host) {
 if (isPlainHostName(host) || dnsDomainIs(host, 'openai.com'))
    return 'PROXY 116.203.197.143:49573'
 if (isPlainHostName(host) || dnsDomainIs(host, 'chatgpt.com'))
    return 'PROXY 116.203.197.143:49573'
 if (isPlainHostName(host) || dnsDomainIs(host, 'instagram.com'))
    return 'PROXY 116.203.197.143:49573'
 if (isPlainHostName(host) || dnsDomainIs(host, 'facebook.com'))
    return 'PROXY 116.203.197.143:49573'
 if (isPlainHostName(host) || dnsDomainIs(host, '.fbcdn.net'))
    return 'PROXY 116.203.197.143:49573'
 else 
    return 'DIRECT'
}
