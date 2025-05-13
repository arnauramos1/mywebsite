$(document).ready(function () {

  // nav
  // -------------------------------------------------------------

  var headroom = new Headroom(document.querySelector("#navbar"), {
    onUnpin: function () {
      if ($('#navbarSupportedContent').hasClass('show')) {
        this.elem.classList.remove(this.classes.unpinned);
        this.elem.classList.add(this.classes.pinned);
      }
      else {
        this.elem.classList.add(this.classes.unpinned);
        this.elem.classList.remove(this.classes.pinned);
      }
    },
    tolerance: {
      down: 10,
      up: 20
    },
    offset: 205
  })
  headroom.init()

  $('#search-trigger').click(function () {
    $(this).parent().toggleClass('search-active')
    $('#q').focus()
  })

  // table links
  // -------------------------------------------------------------

  $('tr[href]').mouseup(function (e) {
    if (getSelection().toString() || e.which == 3) return

    var a = document.createElement("A");
    a.href = $(this).attr('href');
    var url = a.href;
    if (e.which == 2) window.open(url, '_blank')
    else window.location.href = url

  })


  // pills url update
  // -------------------------------------------------------------

  var hash = window.location.hash;
  hash && $('ul.nav a[href="' + hash + '"]').tab('show');
  $('.nav-pills a').click(function (e) {
    $(this).tab('show');
    var scrollmem = $('body').scrollTop() || $('html').scrollTop();
    window.location.hash = this.hash;
    $('html,body').scrollTop(scrollmem);
  });


  // object fit polyfil
  // -------------------------------------------------------------

  if (!window.CSS || !CSS.supports('object-fit', 'cover')) {
    $('.aspect').each(function () {
      $(this).css('background-image', 'url(' + this.firstElementChild.src + ')')
      $(this.firstElementChild).hide()
    })
  }


  // image hover
  // -------------------------------------------------------------
  const ATTR = 'preview'
  $('*[' + ATTR + ']')
    .on('mouseenter', function () {

      var overlay = $(this).children(".preview-person").first()
      if (overlay.length) overlay.removeClass('overlay')
      else overlay = $('<img />')
        .attr('src', $(this).attr(ATTR))
        .addClass('preview-person')

      if ($(this).hasClass('preview')) overlay.removeClass('closing')
      else $(this)
        .addClass('preview')
        .append(overlay)


      setTimeout(function () {
        overlay.addClass('open')
      }, 20)

    })
    .on('mouseleave', function () {

      var parent = $(this)
      var overlay = parent.children(".preview-person").first()
      overlay.addClass('closing')

      setTimeout(function () {
        if (overlay.hasClass('closing')) overlay.removeClass('open')
      }, 20)


      setTimeout(function () {
        if (overlay.hasClass('closing')){
          overlay.remove()
          parent.removeClass('preview')
        } 
      }, 250)

    })



})