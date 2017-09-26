<header class="container">
	<div class="col-xs-12">
		<a class="header__title" href="/">HOLY GUACAMOLE</a>
		<ul class="main__menu">
			<% loop $Menu(1) %>
				<li class="menu__item">
					<a href="$Link" class="menu__link menu__link--$LinkingMode">$MenuTitle</a>
				</li>
			<% end_loop %>
		</ul>
		<div class="mobilemenu__toggle js-mobile-menu">
			X
		</div>
	</div>
</header>
