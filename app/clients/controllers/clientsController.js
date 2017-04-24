angular.module('clients')

.controller('clientsController', function($scope) {
  $scope.clients = [
    {
      name: 'Meggitt Sensing Systems',
      path: 'img/clients/meggitt.jpeg',
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
      path: 'img/clients/PTI.jpg',
      project: 'Overseas 6-4 TI Source',
      description: 'Qualify for hydraulic manifold producion for Airbus A360'
    },
    {
      name: 'South Coast Water District',
      path: 'img/clients/SCWD.png',
      project: 'Pump Shaft Failure Investigation',
      description: 'Bad shaft design identified as root cause'
    },
    {
      name: 'John Crane/Belfab',
      path: 'img/clients/JohnCrane.jpg',
      project: 'Edge Wielded Metal Bellows',
      description: 'Production trouble shooting and design evaluation'
    },
    {
      name: 'DANAHER/Pacific Scientific',
      path: 'img/clients/Danaher.jpeg',
      project: 'Digital TCPS',
      description: 'Design and build a digital temperature compensated pressure switch'
    },
    {
      name: 'Lockheed Martin',
      path: 'img/clients/lockheed.jpeg',
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
      path: 'img/clients/setra.png',
      project: 'Capacitance Pressure Monitors',
      description: 'Identify root cause of product malfunctions'
    },
    {
      name: 'Southern California Edison',
      path: 'img/clients/edison.png',
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
      name: 'Wartsila',
      path: 'img/clients/wartsila.png',
      project: 'Fillet Weld Evaluation',
      description: 'Interface between Wartsila and vendor on fillet weld issue'
    },
    {
      name: 'IRWD',
      path: 'img/clients/IRWD.jpeg',
      project: 'Brown Water Corrosion Study',
      description: '1 year corrosion field study microbiological induced corrosion'
    },
    {
      name: 'Wavestream',
      path: 'img/clients/wavestream.jpg',
      project: 'Solder Joint Evaluation',
      description: 'Classical analysis and finite element evaluation of solder joints'
    },
    {
      name: 'Teledyne Mocroelectronics',
      path: 'img/clients/teledyne.png',
      project: 'Hybrid Microelectronic Databook',
      description: 'Assemble and publish property data relevant to the production of hybrid mircroelectronic circuits'
    },
    {
      name: 'Frisa Aerospace',
      path: 'img/clients/frisa.png',
      project: 'Forging Consultation',
      description: 'Provide on-site conultation for production facility in Monterrey, Mexico'
    },
    {
      name: 'MWDOC',
      path: 'img/clients/MWDOC.jpeg',
      project: 'Desalination Corrosion Study',
      description: 'Two year field study on alloys suitable for desalination plants'
    },
    {
      name: 'Sunkist',
      path: 'img/clients/sunkist.png',
      project: 'Plastic Failures',
      description: 'Determine root vause of failures of plastic components'
    },
    {
      name: 'UCSB/MRL',
      path: 'img/clients/UCSB.png',
      project: 'Materials Studies',
      description: 'Direct student in study of materials that exhibit electric field induced deformation'
    },
    {
      name: 'FLIR',
      path: 'img/clients/FLIR.png',
      project: 'Corrosion Studies',
      description: 'Provide technical consulting services to assist FLIR Engineering in identifying the cause of the Laser Cooling System leaks'
    },
    {
      name: 'Schlosser Forge',
      path: 'img/clients/alcoa.jpeg',
      project: 'Forging Consultation',
      description: 'Provide consultation and training in he producion of NI-Base superalloy forgings'
    },
    {
      name: 'Fluidmaster',
      path: 'img/clients/Fluidmaster.png',
      project: 'Plastic Failures',
      description: 'Identify root failure cause in injection molded toilet components'
    },
    {
      name: 'Castle Inductries of CA',
      path: 'img/clients/engineering.png',
      project: 'Equipment Rack Evaluation',
      description: 'FEA and classical analysis of equipment rack for new aircraft design'
    },
    {
      name: 'Synthesis Energy Systems',
      path: 'img/clients/synthesis-energy-systems.jpg',
      project: 'Coal Gasifier',
      description: 'Evaluate design and assist in the production of a coal gasifier component'
    },
    {
      name: 'Ametek/Ortec',
      path: 'img/clients/ametek.png',
      project: 'Geranium Single Crystal Production',
      description: 'Design and build system to automate the growth of GE single crystals'
    },
    {
      name: 'Scientech',
      path: 'img/clients/scientech.png',
      project: 'RBMK Consultation',
      description: 'Provide evaluation and training on the occurence of Hydrogen embritlement in Russian nuclear reactors'
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
