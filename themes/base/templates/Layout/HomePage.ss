<section class="columns">
	<div class="col-sm-6 column">
		<% loop $PaginatedItems %>
			<% if $Odd %>
				<% include Column_Link isMobile=$Top.isMobile %>
			<% end_if %>
		<% end_loop %>
	</div>
	<div class="col-sm-6 column">
		<% loop $PaginatedItems %>
			<% if $Even %>
				<% include Column_Link isMobile=$Top.isMobile %>
			<% end_if %>
		<% end_loop %>
	</div>

	<% include Pagination %>

</section>