
export default {
  isExternal: isExternal
}

function isExternal(url) {
  let protocols = ['http://', 'https://'];
  return !!protocols.filter(p => {
    return url.indexOf(p);
  }).length;
}