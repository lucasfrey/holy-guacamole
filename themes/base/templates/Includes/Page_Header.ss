<header class="col-xs-12">
	<a class="header__title" href="/">HOLY GUACAMOLE</a>
	<nav>
		<ul class="main__menu">
			<% loop $Menu(1) %>
			<li class="menu__item">
				<a href="$Link" class="menu__link menu__link--$LinkingMode">$MenuTitle</a>
			</li>
			<% end_loop %>
		</ul>
	</nav>
</header>
