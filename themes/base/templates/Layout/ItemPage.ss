<div class="container item">
	<div class="item__description col-xs-12 col-sm-4 col-md-5">
		<h1>$Title</h1>
		<p class="item__created">$Created.format('d M Y')</p>

		<div class="translate js-translate-tabs">
			<div class="translate__holder">
				<div class="lang-EN translate__content translate__content--active">
					$Content
				</div>
				<% if $ContentFR %>
					<div class="lang-FR translate__content">
						$ContentFR
					</div>
				<% end_if %>
			</div>
		</div>
	</div>
	<div class="col-xs-12 col-sm-8 col-md-7">
		<img class="item__image" src="<% if $isMobile %>$Photo.SetWidth(400).URL<% else %>$Photo.SetWidth(900).URL<% end_if %>" alt="$Title" />
	</div>
	<div class="h--clearfix"></div>
</div>
