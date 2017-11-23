<!-- icons meta-tags -->
<link rel="shortcut icon" href="/favicon.ico">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
<link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
<!-- Facebook meta-tags -->
<meta property="og:url" content="$Link" />
<meta property="og:type" content="article" />
<meta property="og:title" content="$Title" />
<meta property="og:description" content="$MetaDescription" />
<meta property="og:image" content="<% if $Photo %>$Photo.URL<% else %>$Image.URL<% end_if %>" />
<!-- Twitter meta-tags -->
<meta name="twitter:card" content="summary" /> <!-- summary, photo or video -->
<meta name="twitter:url" content="$Link" />
<meta name="twitter:title" content="$Title" />
<meta name="twitter:description" content="$MetaDescription" />
<meta name="twitter:image" content="<% if $Photo %>$Photo.URL<% else %>$Image.URL<% end_if %>" />