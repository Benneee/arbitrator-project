setREVStartSize({
  c: 'rev_slider_1_1',
  rl: [1240, 1024, 768, 480],
  el: [868, 768, 450, 720],
  gw: [1240, 1024, 778, 480],
  gh: [868, 768, 450, 720],
  layout: 'fullscreen',
  offsetContainer: '',
  offset: '128px',
  mh: '300'
});
var revapi1, tpj;
jQuery(function() {
  tpj = jQuery;
  if (tpj('#rev_slider_1_1').revolution == undefined) {
    revslider_showDoubleJqueryError('#rev_slider_1_1');
  } else {
    revapi1 = tpj('#rev_slider_1_1')
      .show()
      .revolution({
        jsFileLocation:
          '//abctechweb.net/wptheme/attome/wp-content/plugins/revslider/public/assets/js/',
        sliderLayout: 'fullscreen',
        duration: 7000,
        visibilityLevels: '1240,1024,768,480',
        gridwidth: '1240,1024,778,480',
        gridheight: '868,768,450,720',
        minHeight: 300,
        autoHeight: true,
        editorheight: '868,768,450,720',
        responsiveLevels: '1240,1024,768,480',
        fullScreenOffset: '128px',
        disableProgressBar: 'on',
        navigation: {
          mouseScrollNavigation: false,
          touch: {
            touchenabled: true,
            touchOnDesktop: true
          },
          arrows: {
            enable: true,
            style: 'custom',
            hide_onmobile: true,
            hide_under: 768,
            left: {},
            right: {}
          }
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      });
  }
});
