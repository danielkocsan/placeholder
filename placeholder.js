(function() {
    function onKeyup (event) {
        var $element = $(this);
        if (this.value) {
            $element.parent().attr('data-placeholder', $element.attr('placeholder'));
        }
    };

    $('input').on('keyup', onKeyup);
}());