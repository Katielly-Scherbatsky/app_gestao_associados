Associado
CREATE TABLE Associado (
  ID_Associado INT PRIMARY KEY AUTO_INCREMENT,
  Nome VARCHAR(100),
  CPF VARCHAR(14),
  Telefone VARCHAR(15),
  Faculdade_ID INT,
  Curso VARCHAR(100),
  Poltrona INT,
  Boleto VARCHAR(255),
  Anexos VARCHAR(255),
  FOREIGN KEY (Faculdade_ID) REFERENCES Faculdade(ID_Faculdade)
);


Administrador
CREATE TABLE Administrador (
  ID_Administrador INT PRIMARY KEY AUTO_INCREMENT,
  Nome VARCHAR(100),
  CPF VARCHAR(14),
  Login VARCHAR(50),
  Senha VARCHAR(50)
);

Faculdade
CREATE TABLE Faculdade (
  ID_Faculdade INT PRIMARY KEY AUTO_INCREMENT,
  Nome VARCHAR(100)
);

Dia_Semana
CREATE TABLE Dia_Semana (
  ID_Dia INT PRIMARY KEY AUTO_INCREMENT,
  Nome_Dia VARCHAR(15)
);

Aviso
CREATE TABLE Aviso (
  ID_Aviso INT PRIMARY KEY AUTO_INCREMENT,
  Descricao TEXT,
  Tipo VARCHAR(50),
  Data DATE,
  ID_Administrador INT,
  FOREIGN KEY (ID_Administrador) REFERENCES Administrador(ID_Administrador)
);

Solicitação
CREATE TABLE Solicitacao (
  ID_Solicitacao INT PRIMARY KEY AUTO_INCREMENT,
  Tipo VARCHAR(50),
  Descricao TEXT,
  Data DATE,
  Status VARCHAR(20),
  ID_Associado INT,
  ID_Administrador INT,
  FOREIGN KEY (ID_Associado) REFERENCES Associado(ID_Associado),
  FOREIGN KEY (ID_Administrador) REFERENCES Administrador(ID_Administrador)
);

Chamada
CREATE TABLE Chamada (
  ID_Chamada INT PRIMARY KEY AUTO_INCREMENT,
  Data DATE,
  Presenca BOOLEAN,
  ID_Associado INT,
  FOREIGN KEY (ID_Associado) REFERENCES Associado(ID_Associado)
);

Relatório
CREATE TABLE Relatorio (
  ID_Relatorio INT PRIMARY KEY AUTO_INCREMENT,
  Data DATE,
  Valor_Total DECIMAL(10, 2),
  Valor_Associado DECIMAL(10, 2),
  ID_Associado INT,
  FOREIGN KEY (ID_Associado) REFERENCES Associado(ID_Associado)
);

Associado_Dia_Semana (Tabela de Relacionamento N)
CREATE TABLE Associado_Dia_Semana (
  ID_Associado INT,
  ID_Dia INT,
  PRIMARY KEY (ID_Associado, ID_Dia),
  FOREIGN KEY (ID_Associado) REFERENCES Associado(ID_Associado),
  FOREIGN KEY (ID_Dia) REFERENCES Dia_Semana(ID_Dia)
);
