angular.module('clients')

.controller('clientsController', function($scope) {
  $scope.clients = [
    {
      name: 'Meggitt Sensing Systems',
      path: 'img/clients/engineering.png',
      project: '777 HQ Calibration Test Stand',
      description: 'Design and consruct test stand for ATP and CTP of hydraulic fluid level monitors'
    },
    {
      name: 'OECO',
      path: 'img/clients/oeco.jpg',
      project: 'Generator Failure Investigation',
      description: 'Include epoxy cure identified as root cause'
    },
    {
      name: 'PTI Technologies',
      path: 'img/clients/engineering.png',
      project: 'Overseas 6-4 TI Source',
      description: 'Qualify for hydraulic manifold producion for Airbus A360'
    },
    {
      name: 'South Coast Water District',
      path: 'img/clients/engineering.png',
      project: 'Pump Shaft Failure Investigation',
      description: 'Bad shaft design identified as root cause'
    },
    {
      name: 'John Crane/Belfab',
      path: 'img/clients/engineering.png',
      project: 'Edge Wielded Metal Bellows',
      description: 'Production trouble shooting and design evaluation'
    },
    {
      name: 'DANAHER/Pacific Scientific',
      path: 'img/clients/engineering.png',
      project: 'Digital TCPS',
      description: 'Design and build a digital temperature compensated pressure switch'
    },
    {
      name: 'Lockheed Martin',
      path: 'img/clients/lockheed.jpg',
      project: 'Arsoc PPS Test Stand',
      description: 'Reproduce and update the ARSOC test stand'
    },
    {
      name: 'DirecTV',
      path: 'img/clients/directv.jpg',
      project: 'ODU Corrosion',
      description: 'Evaluate the corrosion on outdoor units'
    },
    {
      name: 'Setra Sensors',
      path: 'img/clients/engineering.png',
      project: 'Capacitance Pressure Monitors',
      description: 'Identify root cause of product malfunctions'
    },
    {
      name: 'Southern California Edison',
      path: 'img/clients/engineering.png',
      project: 'Water Tree Formation',
      description: 'Identify root cause of product malfunctions'
    },
    {
      name: 'Raytheon',
      path: 'img/clients/raytheon.jpg',
      project: 'Paveway Pressure Source',
      description: 'Design and build a pressure sensor that does not breach the vessel wall'
    },
    {
      name: 'Wartsilla',
      path: 'img/clients/engineering.png',
      project: 'Fillet Weld Evaluation',
      description: 'Interface between Wartsilla and vendor on fillet weld issue'
    },
    {
      name: 'IRWD',
      path: 'img/clients/engineering.png',
      project: 'Brown Water Corrosion Study',
      description: '1 year corrosion field study microbiological induced corrosion'
    },
    {
      name: 'Wavestream',
      path: 'img/clients/engineering.png',
      project: 'Solder Joint Evaluation',
      description: 'Classical analysis and finite element evaluation of solder joints'
    }
  ];

// White BG for client top
$('.no-touch .project-list li').hover(function(e) {
  $(this).parents('.client-meta').next('.overflow-wrapper').toggleClass('white-bg');
  $('.touch .client-wrap').toggleClass('.solid');
});

// David Walsh simple lazy loading
[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
    img.removeAttribute('data-src');
  };
});

});
