<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
	<title>$Title | $SiteConfig.Title</title>
	<% base_tag %>
	{$AnalyticsCode}
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	$MetaTags
	<% include Page_Social %>
	<% include Page_Environment %>
</head>
<body class="$ClassName.lowerCase">
	{$TagManagerNoScript}
	<% include Page_Accessibility %>
	<% include Page_Header %>
	<main role="main">
		$Layout
	</main>
	<% include Page_Footer %>
	<% if isDev %>
		<script src="{$ThemeDir}/build/bundle-vendor.js"></script>
		<script src="{$ThemeDir}/build/bundle-index.js"></script>
	<% end_if %>
	<% if not isDev %>
		<script src="$HashPath('build/bundle-index.js')"></script>
	<% end_if %>
</body>
</html>
