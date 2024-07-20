var handleOpenEditModal = function () {
    setTimeout(function () {
        jQuery("#editModal").modal('show');
    }, 200)    
}
/* Window Load START */
jQuery(window).on('load', function () {
	$('.btn-edit').click(handleOpenEditModal)
});