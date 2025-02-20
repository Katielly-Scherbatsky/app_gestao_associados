CREATE TABLE associado (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  cpf VARCHAR(14),
  telefone VARCHAR(15),
  faculdade_id INT,
  curso VARCHAR(100),
  poltrona INT,
  boleto VARCHAR(255),
  anexos VARCHAR(255),
  tipo INT, (associado ou admin)
  FOREIGN KEY (faculdade_id) REFERENCES faculdade(id)
);

CREATE TABLE faculdade (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(200)
);

CREATE TABLE dia_semana (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(15)
);

CREATE TABLE aviso (
  id INT PRIMARY KEY AUTO_INCREMENT,
  descricao VARCHAR(200),
  tipo VARCHAR(50),
  data DATE,
  associado_id INT,
  FOREIGN KEY (associado_id) REFERENCES associado(id)
);

CREATE TABLE solicitacao (
  id INT PRIMARY KEY AUTO_INCREMENT,
  tipo VARCHAR(50),
  descricao VARCHAR(200),
  data DATE,
  status VARCHAR(20),
  associado_id INT,
  FOREIGN KEY (associado_id) REFERENCES associado(id),
);

CREATE TABLE chamada (
  id INT PRIMARY KEY AUTO_INCREMENT,
  data DATE,
  presenca BOOLEAN,
  associado_id INT,
  FOREIGN KEY (associado_id) REFERENCES associado(id)
);

CREATE TABLE associado_dia_semana (
  id INT PRIMARY KEY AUTO_INCREMENT,
  associado_id INT,
  dia_semana_id INT,
  FOREIGN KEY (associado_id) REFERENCES associado(id),
  FOREIGN KEY (dia_semana_id) REFERENCES dia_semana(id)
);
