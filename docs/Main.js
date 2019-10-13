function toggleVisible(e)
{
  /*var element = map.queryRenderedFeatures(e.point, {
    layers: ['citydata']*/
    var visibility = map.getLayoutProperty(e, 'visibility');
    if (visibility === 'visible') {
      map.setLayoutProperty(e, 'visibility', 'none');
    } else {
      map.setLayoutProperty(e, 'visibility', 'visible');
    }
}
