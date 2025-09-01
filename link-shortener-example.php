<?php

// Link Shortener - PHP Version
// reference https://nomadphp.com/blog/64/creating-a-url-shortener-application-in-php-mysql

$links = array(

	'repo' => 'https://github.com/criticalwebdesign/book',
	'hello-world' => 'https://codepen.io/owenmundy/pen/QWzJKVz',
	'think' => 'https://criticalwebdesign.github.io/book/02-view-source/examples/poem-think.html',
	'felines' => 'https://criticalwebdesign.github.io/book/04-on-the-grid/examples/the-new-york-felines/module4.3-finish.html'

);

// print_r($_SERVER);

if (isset($_GET['redirect']) && $_GET['redirect'] != "") {
	$slug = urldecode($_GET['redirect']);


	// $url= GetRedirectUrl($slug);

	if (isset($_GET['test']) && $_GET['test'] != "") {
		print_html($slug . " will redirect to " . $links[$slug]);
	} else {
		// echo $base_url.$url;

		// print_html ($slug ." will redirect to ". $links[$slug]);

		header("location:" . $links[$slug]);
	}
} else {
	$base_url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS']
		=== 'on' ? "https" : "http") .
		"://" . $_SERVER['HTTP_HOST'] .
		$_SERVER['REQUEST_URI'];
	$html = "";
	foreach ($links as $key => $value) {
		$html .= "<tr>
        <td><a href='$base_url$key' target='_blank'>cwd.ly/$key</a></td>
        <td><a href='$value' target='_blank'>$value</a></td>
        </tr>";
	}
	print_html($html);
}


function print_html($str = "")
{
	echo "
   <!doctype html>
   <html lang='en'>
   <head>
   <meta charset='utf-8'>
   <title>URL Shortener</title>
   <style> body { font-family: sans-serif; } </style>
   </head>
   <body>
   <table>
   $str
   </table></body>
   </html>";
}
