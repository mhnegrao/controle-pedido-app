CREATE TABLE cliente(
    id SERIAL PRIMARY KEY,
    nome varchar(50),
    email varchar(100),
    fone VARCHAR(20),
    observacao TEXT,
    ativo BOOLEAN,
    data_inclusao date,
    data_alteracao TIMESTAMP
);
CREATE TABLE pedido(
    id SERIAL PRIMARY KEY,
    id_cliente INTEGER NOT NULL references cliente(id),
    id_user INTEGER NOT NULL,
    data_pedido DATE not NULL,
    data_fechamento DATE,
    data_alteracao TIMESTAMP,
    descricao VARCHAR(100) not null,
    quantidade INTEGER,
    valor_pedido DECIMAL(10, 2),
    observacao TEXT,
    tipo_pagamento INTEGER,
    forma_pagamento INTEGER,
    valor_pago decimal(10, 2),
    ativo BOOLEAN,
    finalizado BOOLEAN,
    cancelado BOOLEAN,
    pago BOOLEAN
);
CREATE TABLE pedidoItem(
    id UUID,
    id_pedido INT REFERENCES pedido(id),
    descricao VARCHAR(50),
    valor_unitario DECIMAL(10, 2),
    quantidade INT,
    cancelado BOOLEAN
);