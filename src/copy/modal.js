var targetElement

setTimeout(function() {
  var elements = document.getElementsByClassName('modal-trigger')

  for (var element of elements) {
    element.addEventListener('click', function(e) {
      if (!e) e = window.event;
      targetElement = document.getElementById(e.target.getAttribute('data-target')) 
      
      if (targetElement !== null || targetElement !== '') {
        targetElement.classList.add('is-shown')
        document.body.classList.add('overflow-hidden')
      }
    }, false)
  }
}, 2000)

var closeBtn = document.querySelectorAll('.close-btn')
  for (var btn of closeBtn) {
    btn.addEventListener('click', function(e) {
      
      targetElement.classList.remove('is-shown')
      document.body.classList.remove('overflow-hidden')
      document.body.classList.add('opacity-100')
  }, false)
}

addEventListener('keydown', function(e) {
  if (e.keyCode == 27 || e.which == 27) {
    targetElement.classList.remove('is-shown')
    document.body.classList.remove('overflow-hidden')
    document.body.classList.add('opacity-100')
  }
}, false)

setTimeout(function() {
  var tabElements = [...document.querySelectorAll('.tab')]
  var tabContentElements = [...document.querySelectorAll('.tab-content')]
  
  for (var tab of tabElements) {
    tab.addEventListener('click', function(e) {
      tabElements.map(tabNav => tabNav.classList.remove('active'))
      
      if (!e) e = window.event
      e.target.classList.add('active')

      for (var tabContent of tabContentElements) {
        if (tabContent.classList.contains('is-shown')) {
          tabContent.classList.remove('is-shown')
          tabContent.classList.add('hidden')
        }
      }
        
      var targetTabElement = document.getElementById(e.target.getAttribute('data-tab')) 
      
      if (targetTabElement !== null || targetTabElement !== '') {
        targetTabElement.classList.remove('hidden')
        targetTabElement.classList.add('is-shown')
      }
    }, false)
  }
}, 2000)