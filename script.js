/**************************************************
 * Natalie Kawalerczak                             *
 * 147160196                                       *
 * nkawalerczak@myseneca.ca                        *
 * 7/28/2020                                       *
 * WEB222 - Assignment 5                           *
 ***************************************************/

// on-load function:
window.onload = function () {
  // main page:
  var main_page = document.getElementsByClassName('All_Products')[0];
  main_page.addEventListener('click', clear());
  main_page.addEventListener('click', headerUpdate('Shop the full catalogue'));
  main_page.addEventListener('click', addStamps());
  main_page.addEventListener('click', addBWIllustrations('main'));
  main_page.addEventListener('click', addColourIllustrations('main'));
  main_page.addEventListener('click', addBWPaintings());
  main_page.addEventListener('click', addColourPaintings());

  // greeting card section:
  var g_cards = document.getElementsByClassName('Cards')[0];
  g_cards.addEventListener('click', clear());
  g_cards.addEventListener('click', addStamps());
  g_cards.addEventListener('click', headerUpdate('Greeting Card Gallery'));

  // painting section:
  // colour:
  var paintings_c = document.getElementsByClassName('Paintings_colour')[0];
  paintings_c.addEventListener('click', clear());
  paintings_c.addEventListener('click', headerUpdate('Colour Painting Gallery'));
  paintings_c.addEventListener('click', addColourPaintings());
  // black and white:
  var paintings_bw = document.getElementsByClassName('Paintings_bw')[0];
  paintings_bw.addEventListener('click', clear());
  paintings_bw.addEventListener('click', headerUpdate('Monochromatic Gallery'));
  paintings_bw.addEventListener('click', addBWPaintings());

  // Illustrations section:
  // colour:
  var ill_c = document.getElementsByClassName('Illustrations_colour')[0];
  ill_c.addEventListener('click', clear());
  ill_c.addEventListener('click', headerUpdate('Colour Illustration Gallery'));
  ill_c.addEventListener('click', addColourIllustrations('two'));
  // bw:
  var ill_bw = document.getElementsByClassName('Illustrations_bw')[0];
  ill_bw.addEventListener('click', clear());
  ill_bw.addEventListener('click', headerUpdate('Monochromatic Gallery'));
  ill_bw.addEventListener('click', addBWIllustrations('two'));

  // commission section:
  var comm = document.getElementsByClassName('Commissions')[0];
  comm.addEventListener('click', clear());
  comm.addEventListener('click', headerUpdate('Request a Commission:'));
  comm.addEventListener('click', createCommission());
  //var submit_button = document.getElementsByClassName("button01")[0];
  //submit_button.addEventListener("click", formSubmit());

  // about section:
  var about_section = document.getElementsByClassName('About')[0];
  about_section.addEventListener('click', clear());
  about_section.addEventListener('click', headerUpdate('About the Artist'));
  about_section.addEventListener('click', loadArtistImage());

  var order_p = document.getElementsById("problem");
  order_p.addEventListener('click', orderProblem());
};
// Functions:

// contact us - radio option
function orderProblem() {
  //return () => {
  var r_problem = document.getElementsById("problem");
  var r_order_problem = document.getElementsById("order_problem");
  r_order_problem.style.display = r_problem.checked ? "block" : "none";
  //};
}

function headerUpdate(text) {
  return () => {
    var sect = document.getElementsByClassName('sect_one')[0];
    // remove other titles:
    var old_h = sect.querySelector('H1');
    if (old_h) sect.removeChild(old_h);
    // create new title:
    var sect_title = document.createElement('H1');
    var title = document.createTextNode(text);
    sect_title.appendChild(title);
    // append to the section:
    sect.appendChild(sect_title);
  };
}

function clear() {
  return () => {
    document.getElementsByClassName('sect_one')[0].innerHTML = '';
    document.getElementsByClassName('sect_two')[0].innerHTML = '';
    document.getElementsByClassName('sect_main')[0].innerHTML = '';
  };
}


function createCommission() {
  return () => {
    // select placement of form
    var sect = document.getElementsByClassName('sect_main')[0];
    // create a form:
    var form1 = document.createElement('form');
    form1.setAttribute('method', 'get');
    form1.setAttribute('onsubmit', 'formSubmit()');

    var title1 = document.createElement('h2');
    title1.innerHTML = 'Enter Commission Details';
    form1.appendChild(title1);
    var text2 = document.createElement('p');
    text2.innerHTML = 'Name:';
    form1.appendChild(text2);
    form1.appendChild(document.createElement('br'));

    var name1 = document.createElement('input');
    name1.type = 'text';
    name1.name = 'Name';
    name1.class = 'user_input';
    name1.placeholder = 'Name';
    name1.required = true;
    form1.appendChild(name1);

    form1.appendChild(document.createElement('br'));
    var text1 = document.createElement('p');
    text1.innerHTML = 'E-mail:';
    form1.appendChild(text1);
    form1.appendChild(document.createElement('br'));

    var email1 = document.createElement('input');
    email1.type = 'text';
    email1.name = 'Email';
    email1.class = 'user_input';
    email1.placeholder = 'E-mail';
    email1.required = true;
    form1.appendChild(email1);

    form1.appendChild(document.createElement('br'));

    var text_new = document.createElement('p');
    text_new.innerHTML = 'Desired deadline:';
    form1.appendChild(text_new);
    form1.appendChild(document.createElement('br'));

    var date1 = document.createElement('input');
    date1.type = 'date';
    form1.appendChild(date1);

    form1.appendChild(document.createElement('br'));
    var text3 = document.createElement('p');
    text3.innerHTML = 'Commission details:';
    form1.appendChild(text3);
    form1.appendChild(document.createElement('br'));

    var desc = document.createElement('textarea');
    desc.class = 'user_input';
    desc.placeholder = 'Commission Description';
    desc.required = true;
    desc.cols = '40';
    desc.rows = '3';
    form1.appendChild(desc);

    var break3 = document.createElement('br');
    form1.appendChild(break3);

    var submit1 = document.createElement('input');
    submit1.type = 'submit';
    submit1.class = 'button01';
    form1.appendChild(submit1);

    sect.appendChild(form1);
  };
}

function addStamps() {
  return () => {
    // first select the location
    var main1 = document.getElementsByClassName('sect_main')[0];

    // now load all the stamp images
    var fig1 = document.createElement('figure');
    var img1 = document.createElement('IMG');
    img1.src = 'stamp_bee.jpg';
    img1.alt = 'bee';
    fig1.appendChild(img1);
    var caption = document.createElement('figcaption');
    caption.innerHTML = 'Bumblebee with Flowers <br> Print: $10.00 | Set of 10 cards: $30.00';
    fig1.appendChild(caption);

    var fig2 = document.createElement('figure');
    var img2 = document.createElement('IMG');
    img2.src = 'WEB222_ART/stamp_bunnies.jpg';
    img2.alt = 'bunny';
    fig2.appendChild(img2);
    var caption2 = document.createElement('figcaption');
    caption2.innerHTML = 'Quad Bunnies <br> Print set: $15.00 | Set of 10 cards: $30.00';
    fig2.appendChild(caption2);

    var fig3 = document.createElement('figure');
    var img3 = document.createElement('IMG');
    img3.src = 'WEB222_ART/stamp_mountains01.jpg';
    img3.alt = 'mountain';
    fig3.appendChild(img3);
    var caption3 = document.createElement('figcaption');
    caption3.innerHTML =
      'I Want to See Mountains Again! <br> Print: $10.00 | Set of 10 cards: $30.00';
    fig3.appendChild(caption3);

    var fig4 = document.createElement('figure');
    var img4 = document.createElement('IMG');
    img4.src = 'WEB222_ART/stamp_mushroom01.jpg';
    img4.alt = 'mushroom';
    fig4.appendChild(img4);
    var caption4 = document.createElement('figcaption');
    caption4.innerHTML = 'A Mushroom Duo <br> Print set: $12.00 | Set of 10 cards: $25.00';
    fig4.appendChild(caption4);

    var fig5 = document.createElement('figure');
    var img5 = document.createElement('IMG');
    img5.src = 'WEB222_ART/stamp_mushrooms02.jpg';
    img5.alt = 'mushrooom';
    fig5.appendChild(img5);
    var caption5 = document.createElement('figcaption');
    caption5.innerHTML = 'A Study of Mushrooms <br> Print: $10.00 | Set of 10 cards: $30.00';
    fig5.appendChild(caption5);

    var fig6 = document.createElement('figure');
    var img6 = document.createElement('IMG');
    img6.src = 'WEB222_ART/stamp_snake.jpg';
    img6.alt = 'snake';
    fig6.appendChild(img6);
    var caption6 = document.createElement('figcaption');
    caption6.innerHTML = 'Egg and Snake <br> Print: $10.00 | Set of 10 cards: $30.00';
    fig6.appendChild(caption6);

    main1.appendChild(fig1);
    main1.appendChild(fig2);
    main1.appendChild(fig3);
    main1.appendChild(fig4);
    main1.appendChild(fig5);
    main1.appendChild(fig6);
  };
}

function addColourPaintings() {
  return () => {
    var main1 = document.getElementsByClassName('sect_main')[0];

    var fig1 = document.createElement('figure');
    var img1 = document.createElement('img');
    img1.src = 'WEB222_ART/colour_castle_painting.jpg';
    img1.alt = 'castle';
    fig1.appendChild(img1);
    var caption1 = document.createElement('figcaption');
    caption1.innerHTML = 'Castle on the Hill <br> Print: $30.00';
    fig1.appendChild(caption1);
    main1.appendChild(fig1);

    var fig2 = document.createElement('figure');
    var img2 = document.createElement('img');
    img2.src = 'WEB222_ART/colour_painting.jpg';
    img2.alt = 'waves';
    fig2.appendChild(img2);
    var caption2 = document.createElement('figcaption');
    caption2.innerHTML = 'Summer Waves <br> Print: $30.00';
    fig2.appendChild(caption2);
    main1.appendChild(fig2);
  };
}

function addBWPaintings() {
  return () => {
    document.getElementsByClassName('sect_two')[0].innerHTML = '';
    var main1 = document.getElementsByClassName('sect_main')[0];

    var fig1 = document.createElement('figure');
    var img1 = document.createElement('img');
    img1.src = 'WEB222_ART/painting_bw.jpg';
    img1.alt = 'mountains';
    fig1.appendChild(img1);
    var caption1 = document.createElement('figcaption');
    caption1.innerHTML = 'Mountain Scenery 01 <br> Print: $20.00';
    fig1.appendChild(caption1);
    main1.appendChild(fig1);
  };
}

function addColourIllustrations(text_param) {
  return () => {
    var img_name = [
      'WEB222_ART/colour01.jpg',
      'WEB222_ART/colour02.jpg',
      'WEB222_ART/colour03.jpg',
      'WEB222_ART/colour04.jpg',
      'WEB222_ART/colour05.jpg',
      'WEB222_ART/colour06.jpg',
      'WEB222_ART/colour07.jpg',
      'WEB222_ART/colour08.jpg',
      'WEB222_ART/colour09.jpg',
      'WEB222_ART/colour010.jpg',
      'WEB222_ART/colour011.jpg',
      'WEB222_ART/colour012.jpg',
      'WEB222_ART/colour013.jpg',
      'WEB222_ART/colour014.jpg',
      ];
    var text = [
      'Retro House <br> Print: $15.00',
      'In Passing <br> Print: $20.00',
      'Remember Where we Parked <br> Print: $25.00',
      'A Duo <br> Print: $25.00',
      'On a Little Street <br> Print: $15.00',
      'Shadows of Colour <br> Print: $25.00',
      'The Neighbours <br> Print: $30.00',
      'A Wasteland <br> Print: $20.00',
      'A Little Thirsty <br> Print: $15.00',
      'The Lonely Mountain <br> Print: $25.00',
      'Mushrooms for Days <br> Print Set: $30.00',
      'Lantern Light <br> Print: $20.00',
      'A Green Day <br> Print: $15.00',
      'The Waves that hit the Beach that Day <br> Print: $40.00'
    ];
    var text_alt = [
      'Retro House',
      'In Passing',
      'Remember',
      'A Duo',
      'On a Little Street',
      'Shadows of Colour',
      'The Neighbours',
      'A Wasteland',
      'A Little Thirsty',
      'The Lonely Mountain',
      'Mushrooms for Days',
      'Lantern Light',
      'A Green Day',
      'The Waves that hit the Beach that Day'
    ];
    for (var i = 0; i < 14; i++) {
      var fig2 = document.createElement('figure');
      var img2 = document.createElement('img');
      img2.src = img_name[i];
      img2.alt = text_alt[i];
      fig2.appendChild(img2);
      var caption2 = document.createElement('figcaption');
      caption2.innerHTML = text[i];
      fig2.appendChild(caption2);
      document.getElementsByClassName('sect_' + text_param)[0].appendChild(fig2);
    }
  };
}

function addBWIllustrations(text_param) {
  return () => {
    var img_name = [
      'WEB222_ART/ink_apartments01.jpg',
      'WEB222_ART/ink_apartments02.jpg',
      'WEB222_ART/ink_apartments03.jpg',
      'WEB222_ART/ink_apartments04.jpg',
      'WEB222_ART/ink_apartments05.jpg',
      'WEB222_ART/ink_apartments06.jpg',
      'WEB222_ART/ink_apartments07.jpg'
      ];
      
    var text = [
      'Case Study 01 <br> Print: $40.00',
      'Store Front <br> Print: $30.00',
      "Let's Go Home <br> $35.00",
      'Case Study 02 <br> Print: $25.00',
      'Anyone Home? <br> Print: $30.00',
      "Let's Go Back <br> Print: $25.00"
    ];
    var text_alt = [
      'Case Study',
      'Store Front',
      "Let's Go Home",
      'Case Study',
      'Anyone Home?',
      "Let's Go Back"
    ];
    for (var i = 0; i < 7; i++) {
      var fig2 = document.createElement('figure');
      var img2 = document.createElement('img');
      img2.src = img_name[i];
      img2.alt = text_alt[i];
      fig2.appendChild(img2);
      var caption2 = document.createElement('figcaption');
      caption2.innerHTML = text[i];
      fig2.appendChild(caption2);
      document.getElementsByClassName('sect_' + text_param)[0].appendChild(fig2);
    }
  };
}

function loadArtistImage() {
  return () => {
    var sect = document.getElementsByClassName('sect_main')[0];

    // create the image elemenet to be displayed in this section:
    var img1 = document.createElement('IMG');
    img1.src = 'WEB222_ART/artist_profile.jpg';
    img1.id = 'ArtistPortrait';
    img1.class = 'center';
    img1.title = 'Seoul, South Korea';
    img1.alt = 'the artist';
    sect.appendChild(img1);
    // create the paragraphs that need to be displayed:
    var par = document.createElement('P');
    par.id = 'first_p';
    par.innerText = 'Natalie Kawalerczak is a 25 year old artist living in Toronto, Canada.';
    var par2 = document.createElement('P');
    par2.innerText =
      "She studied at the University of Toronto, where she majored in Physics and Math. Now she's studing Computer Programing and Data Analysis at Seneca College.";
    var par3 = document.createElement('P');
    par3.innerText =
      "Her art ranges from watercolour paintings to ink illustrations, but she also likes to experiment with oil paints or rubber stamp carving. Currently she's working with fabric paint to finalize her hand-made purses which should appear on the online store in the coming months.";
    sect.appendChild(par);
    sect.appendChild(par2);
    sect.appendChild(par3);
  };
}
