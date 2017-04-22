<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
	<title>$Title | $SiteConfig.Title</title>
	<% base_tag %>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	$MetaTags
	<% include Page_Social %>
	<% include Page_Environment %>
</head>
<body class="$ClassName.lowerCase">
	<% include Page_Tag_Manager %>
	<% include Page_Accessibility %>
	<% include Page_Header %>
	<main role="main">
		$Layout
	</main>
	<% include Page_Footer %>
	<% if isDev %>
		<script src="{$ThemeDir}/build/bundle-vendor.js"></script>
	<% end_if %>
	<script src="{$ThemeDir}/build/bundle-index.js"></script>
</body>
</html>
