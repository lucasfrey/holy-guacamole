<section class="columns">
	<div class="col-sm-6 column">
		<% loop $PaginatedItems %>
			<% if $MultipleOf(2) %>
				<% include Column_Link isMobile=$Top.isMobile %>
			<% end_if %>
		<% end_loop %>
	</div>
	<div class="col-sm-6 column">
		<% loop $PaginatedItems %>
			<% if $Pos == 1 || $MultipleOf(3) %>
				<% include Column_Link isMobile=$Top.isMobile %>
			<% end_if %>
		<% end_loop %>
	</div>
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
						<a href="$Link">$PageNum</a>
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
</section>