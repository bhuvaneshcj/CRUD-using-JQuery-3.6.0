$("form").submit(function (e) {
  e.preventDefault();

  var name = $("input[name='name']").val();
  var email = $("input[name='email']").val();

  if (name != "" && email != "") {
    $("tbody").append(
      "<tr data-name='" +
        name +
        "' data-email='" +
        email +
        "'><td style='width: 40%'>" +
        name +
        "</td><td style='width: 40%'>" +
        email +
        "</td><td style='width: 20%'><button class='btn btn-secondary btn-sm btn-edit' style='margin-right: 10px;'><i class='fa fa-pencil' style='font-size:27px;'></i></button><button class='btn btn-danger btn-sm btn-delete' style='margin-right: 10px;'><i class='fa fa-trash' style='font-size:27px;'></i></button></td></tr>"
    );
  }

  $("input[name='name']").val("");
  $("input[name='email']").val("");
});

$("body").on("click", ".btn-delete", function () {
  $(this).parents("tr").remove();
});

$("body").on("click", ".btn-edit", function () {
  $(this).parents("tr").find(".btn-edit").hide();
  $(this).parents("tr").find(".btn-delete").hide();

  var name = $(this).parents("tr").attr("data-name");
  var email = $(this).parents("tr").attr("data-email");

  $(this)
    .parents("tr")
    .find("td:eq(0)")
    .html('<input name="edit_name" class="form-control" value="' + name + '">');
  $(this)
    .parents("tr")
    .find("td:eq(1)")
    .html(
      '<input name="edit_email" class="form-control" value="' + email + '">'
    );
  $(this)
    .parents("tr")
    .find("td:eq(2)")
    .prepend(
      "<button class='btn btn-success btn-sm btn-update' style='margin-right: 10px;'><i class='fa fa-save' style='font-size:27px;'></i></button><button class='btn btn-danger btn-sm btn-cancel' style='margin-right: 10px;'><i class='fa fa-close' style='font-size:27px;'></i></button>"
    );
});

$("body").on("click", ".btn-cancel", function () {
  $(this).parents("tr").find(".btn-edit").show();
  $(this).parents("tr").find(".btn-delete").show();

  $(this).parents("tr").find(".btn-update").hide();
  $(this).parents("tr").find(".btn-cancel").hide();

  var name = $(this).parents("tr").attr("data-name");
  var email = $(this).parents("tr").attr("data-email");
  $(this).parents("tr").find("td:eq(0)").text(name);
  $(this).parents("tr").find("td:eq(1)").text(email);
});

$("body").on("click", ".btn-update", function () {
  $(this).parents("tr").find(".btn-edit").show();
  $(this).parents("tr").find(".btn-delete").show();

  $(this).parents("tr").find(".btn-update").hide();
  $(this).parents("tr").find(".btn-cancel").hide();

  var name = $(this).parents("tr").find("input[name='edit_name']").val();
  var email = $(this).parents("tr").find("input[name='edit_email']").val();

  $(this).parents("tr").attr("data-name", name);
  $(this).parents("tr").attr("data-email", email);

  $(this).parents("tr").find("td:eq(0)").text(name);
  $(this).parents("tr").find("td:eq(1)").text(email);
});
