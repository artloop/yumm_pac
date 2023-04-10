function FindProxyForURL(url, host) {
 if (isPlainHostName(host) || dnsDomainIs(host, 'chaturbate.com'))
    return 'PROXY 116.203.197.143:49573'
 if (isPlainHostName(host) || dnsDomainIs(host, 'highwebmedia.com'))
    return 'PROXY 116.203.197.143:49573'
 if (isPlainHostName(host) || dnsDomainIs(host, 'stripchat.com'))
    return 'PROXY 116.203.197.143:49573'
 else 
    return 'DIRECT'
}
