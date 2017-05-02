<a class="column__link" href="$Link">
	<div class="column__description">
		<h2 class="column__title">$Title</h2>
		<p>- View -</p>
	</div>
	<img class="column__image" src="<% if $isMobile %>$Photo.SetWidth(300).URL<% else %>$Photo.SetWidth(600).URL<% end_if %>" alt="$Photo.Title" />
</a>