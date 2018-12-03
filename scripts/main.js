$( document ).ready(function() {

$("#nav").load("components/nav.html");
$("#footer").load("components/footer.html");
$("#content").load("components/about.html");


  $(function () {

    $(".navAbout").on("click", function () {
      $("#sectionName").html('');

      $("#content").load("components/about.html");
    });
    $(".navContact").on("click", function () {
      $("#sectionName").html('');

      $("#content").load("components/contact.html");
    });
    $(".workSections").on("click", "a", function () {

      var module = this.id;
      console.log(module);
      var getthatmodule = ("./assets/data/" + module + ".json");
      $("#content").empty;

      $.getJSON(getthatmodule, function (json) {
        moduleJson = json.artwork;
        console.log(moduleJson);
        $("#sectionName").show;
        $("#sectionName").html(moduleJson[0].section + " - " + moduleJson[0].sectionname);
        $("#sectionName").append("<div class='hr'></div>");

        // $('div#content').html("<b>Section</b>: " + moduleJson[0].section);
        $("#content").html(moduleJson.map(function (artwork) {
          return ("<div class='grid-item'><a href=" + artwork.img + ' ' + "target='_blank'><div class='artGen' data-topic=''><img src='" + artwork.img + "'></div>" + "</a></div>");
        }).join(" "));



        //foreachLoop here


      });

      // $("#content").html("module" + module);
      // $('#content').load("/sections/" + module + ".html");
    });
  });
});