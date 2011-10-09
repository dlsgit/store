$(document).ready(function() {

    $('.comment-details').hide();

    $('.comment-name label').click(function() {
        $(this).parent().next().toggle('fast');
    });

    /*$('.comment-name').toggle(
        function() {
            $(this).next().show('fast');
        },
        function() {
            $(this).next().hide('fast');
        }
    );*/

    $("#comment-dialog-form").dialog({
        autoOpen: false,
        height: 'auto',
        width: 'auto',
        modal: true,
        buttons: {
            "Legg til valgt kommentar": function() {
                var checkedBoxes = $('[name="comment-checkbox-group"]:checked');
                var commentLabels = $('label');
                var cbNames = [];
                var selectedComments = [];
                if (checkedBoxes.length == 0) {
                    selectedComments[i] = '<tr><td>Ingen kommentar</td></tr>';
                } else {
                    for (i = 0; i < checkedBoxes.length; i++) {
                        cbNames[i] = checkedBoxes[i].id;
                        selectedComments[i] = '<tr><td>' + commentLabels[i].innerText + '</td></tr>';
                    }
                }
                $('#result').html('The following checkboxes are selected: <tt>' + cbNames.toString() + '</tt>');
                $('#selected-comments tbody').html(selectedComments.toString());
                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#add-comment").button().click(function() {
        $("#comment-dialog-form").dialog("open");
    });

});