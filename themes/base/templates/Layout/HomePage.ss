<section class="columns">
	<div class="col-sm-6 column">
		<% loop $Items.Sort('Created') %>
			<% if $MultipleOf(2) %>
				<% include Column_Link %>
			<% end_if %>
		<% end_loop %>
	</div>
	<div class="col-sm-6 column">
		<% loop $Items.Sort('Created') %>
			<% if $Pos == 1 || $MultipleOf(3) %>
				<% include Column_Link %>
			<% end_if %>
		<% end_loop %>
	</div>
</section>