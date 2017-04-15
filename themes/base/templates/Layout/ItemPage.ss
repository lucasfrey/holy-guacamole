<div class="item">
	<div class="item__description col-xs-12 col-sm-4 col-md-5">
		<h1>$Title</h1>
		<p class="item__created">$Created.format('d M Y')</p>
		$Content
	</div>
	<div class="col-xs-12 col-sm-8 col-md-7">
		<img class="item__image" src="<% if $isMobile %>$Photo.SetWidth(400).URL<% else %>$Photo.SetWidth(900).URL<% end_if %>" alt="$Title" />
	</div>
	<div class="h--clearfix"></div>
</div>
