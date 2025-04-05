<?php
session_start();
include "server.php"; // Database connection

// Ensure user is logged in
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'service-provider') {
    header("Location: login.html");
    exit();
}

// Check if service ID is provided
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['service_id'])) {
    $service_id = $_POST['service_id'];
    $user_id = $_SESSION['user_id'];

    // Ensure the service belongs to the logged-in provider before deleting
    $sql = "DELETE FROM services WHERE id = ? AND user_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ii", $service_id, $user_id);

    if ($stmt->execute()) {
        echo "<script>alert('Service deleted successfully!'); window.location='product.php';</script>";
    } else {
        echo "<script>alert('Error deleting service.'); window.location='product.php';</script>";
    }

    $stmt->close();
} else {
    echo "<script>alert('Invalid request.'); window.location='product.php';</script>";
}

$conn->close();
?>
