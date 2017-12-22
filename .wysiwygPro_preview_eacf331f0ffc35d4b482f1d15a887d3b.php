<?php
if ($_GET['randomId'] != "u2X7ELpjAlrGv7azxwAlP7D9fCBNCwX9QOnnXFSI7bWFj9w5BoGK8TTGnHGkVBZB") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
