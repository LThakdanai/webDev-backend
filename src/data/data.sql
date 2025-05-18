-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Runner Table
CREATE TABLE IF NOT EXISTS runner (
    runner_id SERIAL,
    raw_video VARCHAR(255),
    stamp_date TIMESTAMP,
    user_id INTEGER,
    PRIMARY KEY (runner_id, user_id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Product Data Table
CREATE TABLE IF NOT EXISTS product_data (
    product_number VARCHAR(50),
    part_number VARCHAR(50),
    user_id INTEGER,
    line VARCHAR(100),
    plan NUMERIC,
    actual NUMERIC,
    deflect NUMERIC,
    total_patch NUMERIC,
    total_actual NUMERIC,
    PRIMARY KEY (product_number, part_number, user_id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Process Data Table
CREATE TABLE IF NOT EXISTS process_data (
    runner_id INTEGER,
    product_number VARCHAR(50),
    time_stamp TIMESTAMP,
    user_id INTEGER,
    ct1 FLOAT,
    ct2 FLOAT,
    ct3 FLOAT,
    ct4 FLOAT,
    ct5 FLOAT,
    ctt FLOAT,
    plt1 BOOLEAN,
    plt2 BOOLEAN,
    plt3 BOOLEAN,
    plt4 BOOLEAN,
    plt5 BOOLEAN,
    status BOOLEAN,
    PRIMARY KEY (runner_id, product_number, time_stamp),
    FOREIGN KEY (runner_id, user_id) REFERENCES runner(runner_id, user_id),
    FOREIGN KEY (product_number, user_id) REFERENCES product_data(product_number, user_id)
);

-- EFF Statistics Table
CREATE TABLE IF NOT EXISTS eff_stat (
    product_number VARCHAR(50),
    time_stamp TIMESTAMP,
    user_id INTEGER,
    product VARCHAR(100),
    downtime INTERVAL,
    availability INTERVAL,
    eff FLOAT,
    performance FLOAT,
    quality FLOAT,
    oee FLOAT,
    PRIMARY KEY (product_number, time_stamp, user_id),
    FOREIGN KEY (product_number, user_id) REFERENCES product_data(product_number, user_id)
);
