// 2016 Sonata Hybrid
var sonataHybrid_2016 = {
  name: 'Sonata Hybrid',
  listImage: 'http://placehold.it/200x100',
  selectImage: 'http://placehold.it/350x300',
  data: [
    {
      label: 'Quick Reference and Product Guide',
      links: [
        {
          text: '2016 Sonata QRG',
          url: 'https://giphy.com/gifs/reaction-excited-142UITjG5GjIRi'
        },
        {
          text: '2016 Sonata Multimedia System Quick Reference Guide',
          url: 'https://giphy.com/gifs/reaction-excited-142UITjG5GjIRi'
        }
      ]
    },
    {
      label: 'Warranty',
      links: [
        {
          text: '2016 Warranty Coverage Guide',
          url: 'https://giphy.com/gifs/reaction-excited-142UITjG5GjIRi'
        }
      ]
    },
    {
      label: 'Related Documents',
      links: [
        {
          text: 'LF Sonata 7-Speed Dual Clutch Transmission Job Aid',
          url: 'https://giphy.com/gifs/reaction-excited-142UITjG5GjIRi'
        }
      ]
    },
    {
      label: 'Owner\'s Manual',
      links: [
        {
          text: '2016 Sonata Multimedia System\'s User Manual',
          url: 'https://giphy.com/gifs/reaction-excited-142UITjG5GjIRi'
        }
      ]
    },
    {
      label: 'Campaign',
      links: [
        {
          text: 'Campaign 134 Job Aid',
          url: 'https://giphy.com/gifs/reaction-excited-142UITjG5GjIRi'
        }
      ]
    },
    {
      label: 'Pricing Sheet',
      links: [
        {
          text: '2016 Sonata Pricing Sheet',
          url: 'https://giphy.com/gifs/reaction-excited-142UITjG5GjIRi'
        }
      ]
    }
  ]
}

// 2016 Tucson
var tucson_2016 = {
  name: 'Tucson',
  listImage: 'http://placehold.it/200x100',
  selectImage: 'http://placehold.it/350x300',
  data: [
    {
      label: 'Quick Reference and Product Guide',
      links: [
        {
          text: '2016 Tucson QRG',
          url: 'https://giphy.com/gifs/reaction-excited-142UITjG5GjIRi'
        },
        {
          text: '2016 Tucson Multimedia System Quick Reference Guide',
          url: 'https://giphy.com/gifs/reaction-excited-142UITjG5GjIRi'
        }
      ]
    },
    {
      label: 'Warranty',
      links: [
        {
          text: '2016 Warranty Coverage Guide',
          url: 'https://giphy.com/gifs/reaction-excited-142UITjG5GjIRi'
        }
      ]
    },
    {
      label: 'Related Documents',
      links: [
        {
          text: 'LF Tucson 7-Speed Dual Clutch Transmission Job Aid',
          url: 'https://giphy.com/gifs/reaction-excited-142UITjG5GjIRi'
        }
      ]
    },
    {
      label: 'Owner\'s Manual',
      links: [
        {
          text: '2016 Tucson Multimedia System\'s User Manual',
          url: 'https://giphy.com/gifs/reaction-excited-142UITjG5GjIRi'
        }
      ]
    },
    {
      label: 'Campaign',
      links: [
        {
          text: 'Campaign 134 Job Aid',
          url: 'https://giphy.com/gifs/reaction-excited-142UITjG5GjIRi'
        }
      ]
    },
    {
      label: 'Pricing Sheet',
      links: [
        {
          text: '2016 Tucson Pricing Sheet',
          url: 'https://giphy.com/gifs/reaction-excited-142UITjG5GjIRi'
        }
      ]
    }
  ]
};

/***** Global Data *****/
var teleTechGlobalData = {
  /***** HEADER INFO *****/
  header: {
    // NOTE: use relative urls for links to 'pages' within same widget
    // otherwise use http:// or https:// routes
    links: [
      {
        url: '#',
        text: 'MODEL MATRIX'
      },
      {
        url: '#',
        text: 'ESCALATION DOCUMENTS'
      },
      {
        url: '#',
        text: 'HYUNDAI TECHNICAL CONCERNS MATRIX'
      },
      {
        url: '#',
        text: 'USEFUL LINKS'
      }
    ]
  },
  cars: {
    2016: [
      sonataHybrid_2016,
      tucson_2016,
      tucson_2016,
      tucson_2016,
      tucson_2016
    ],
    2015: [
      tucson_2016
    ]
  }
  /***** END HEADER INFO *****/
};