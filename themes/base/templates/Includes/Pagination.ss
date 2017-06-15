<div class="pagination h--clear">
	<% if $PaginatedItems.MoreThanOnePage %>
		<% if $PaginatedItems.NotFirstPage %>
			<a class="pagination__link" href="$PaginatedItems.PrevLink">Prev</a>
		<% end_if %>
		<% loop $PaginatedItems.Pages %>
			<% if $CurrentBool %>
				<span class="pagination__pagenum">$PageNum</span>
			<% else %>
				<% if $Link %>
					<a class="pagination__link pagination__link--numeral" href="$Link">$PageNum</a>
				<% else %>
					...
				<% end_if %>
			<% end_if %>
		<% end_loop %>
		<% if $PaginatedItems.NotLastPage %>
			<a class="pagination__link" href="$PaginatedItems.NextLink">Next</a>
		<% end_if %>
	<% end_if %>
</div>