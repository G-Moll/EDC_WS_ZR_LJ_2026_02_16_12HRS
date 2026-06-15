-- ============================================
-- SCHEMA FOR DATABASE
-- DATABASE:    CoffeeArt
-- TABLES:      Roles, Users, Posts, Products, Sales, SaleDetails
-- ============================================

-- ============================================
-- CREATE DATABASE CoffeeArt
-- ============================================
DROP DATABASE IF EXISTS CoffeeArt;

CREATE DATABASE IF NOT EXISTS CoffeeArt
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE CoffeeArt;



-- ============================================
-- TABLE: Roles
-- ============================================
CREATE TABLE IF NOT EXISTS Roles(
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR( 100 ) NOT NULL,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



-- ============================================
-- TABLE: Users
-- ============================================
CREATE TABLE IF NOT EXISTS Users (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    role_id INT UNSIGNED,
    nickname VARCHAR( 25 ) NOT NULL,
    name VARCHAR( 100 ) NOT NULL,
    email VARCHAR( 255 ) NOT NULL UNIQUE,
    password VARCHAR( 255 ) NOT NULL,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_users_nickname ( nickname ),
    INDEX idx_users_name ( name ),
    INDEX idx_users_role_id ( role_id ),

    FOREIGN KEY( role_id ) REFERENCES Roles( id )
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



-- ============================================
-- TABLE: Posts
-- ============================================
CREATE TABLE IF NOT EXISTS Posts (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    user_id INT UNSIGNED NOT NULL,
    title VARCHAR( 35 ) NOT NULL,
    content VARCHAR( 180 ) NOT NULL,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_posts_user_id ( user_id ),
    INDEX idx_posts_title ( title ),
    INDEX idx_posts_created_at ( created_at ),
    INDEX idx_posts_updated_at ( updated_at ),

    FOREIGN KEY( user_id ) REFERENCES Users( id )
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



-- ============================================
-- TABLE: Products
-- ============================================
CREATE TABLE IF NOT EXISTS Products (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR( 35 ) NOT NULL,
    category VARCHAR( 25 ) NOT NULL,
    description VARCHAR( 120 ) NOT NULL,
    price DECIMAL( 10, 2 ) NOT NULL,
    images JSON DEFAULT NULL,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_products_category ( category ),
    INDEX idx_products_name ( name ),
    INDEX idx_products_price ( price ),
    INDEX idx_products_created_at ( created_at )
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



-- ============================================
-- TABLE: Sales
-- ============================================
CREATE TABLE IF NOT EXISTS Sales (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    user_id INT UNSIGNED NOT NULL,
    total_payment DECIMAL( 10, 2 ) NOT NULL,
    total_products INT UNSIGNED NOT NULL,
    total_items INT UNSIGNED NOT NULL,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_sales_user_id ( user_id ),
    INDEX idx_sales_created_at ( created_at ),
    INDEX idx_sales_user_date ( user_id, created_at ),

    FOREIGN KEY( user_id ) REFERENCES Users( id )
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



-- ============================================
-- TABLE: SaleDetails O2M (RELATION Sales & Products)
-- ============================================
CREATE TABLE IF NOT EXISTS SaleDetails (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    sale_id INT UNSIGNED NOT NULL,
    product_id INT UNSIGNED NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL( 10, 2 ) NOT NULL,
    sub_total DECIMAL( 10, 2 ) NOT NULL,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_saledetails_sale_id ( sale_id ),
    INDEX idx_saledetails_product_id ( product_id ),
    INDEX idx_saledetails_sale_product ( sale_id, product_id ),

    FOREIGN KEY( sale_id ) REFERENCES Sales( id ),
    FOREIGN KEY( product_id ) REFERENCES Products( id )
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
