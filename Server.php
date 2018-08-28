<?php
/**
 * Created by IntelliJ IDEA.
 * User: yizheng
 * Date: 2018/8/26
 * Time: 下午1:47
 */


//if (isset($_GET['name'])) {
//    echo "hello".$_GET['name'];
//} else {
//    echo "Args Error";
//}

if (isset($_POST['name'])) {
    echo "hello".$_POST['name'];
} else {
    echo "Args Error";
}