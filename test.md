graph TD

%% Поколение 1 (прапрадеды/прапрабабки)
PP1_Man1[ "Муж Марии Максимовны\n(имя не названо)" ]
PP1_Woman1[ "Мария Максимовна Шуховцева<br/>(Михалёва)<br/>1908–1976" ]

PP1_Man2[ "Анисим Иосифович Жоров<br/>(годы жизни не указаны)" ]
PP1_Woman2[ "Елена Иосифовна Жорова<br/>(Менич)<br/>22.05.1908–22.12.1989" ]

PP1_Man1 --> PP1_Woman1
PP1_Man2 --> PP1_Woman2

%% Поколение 2 (прадеды/прабабки Юли)
P2_Father[ "Александр Анисимович Жоров<br/>08.07.1931–09.11.1990" ]
P2_Mother[ "Раиса Алексеевна Жорова<br/>(Шуховцева)<br/>03.10.1932–03.04.1975" ]

PP1_Woman1 --> P2_Mother
PP1_Man2 --> P2_Father
PP1_Woman2 --> P2_Father

%% Братья/сёстры Александра
P2_Brother[ "Евгений Анисимович Жоров<br/>1930–2000" ]
P2_Sister[ "София (Соня) Анисимовна<br/>род. 01.05.1935 (жива)" ]

PP1_Man2 --> P2_Brother
PP1_Woman2 --> P2_Brother
PP1_Man2 --> P2_Sister
PP1_Woman2 --> P2_Sister

%% Муж Софии
Husband_Sofia[ "Иван Владимирович Стаховский<br/>род. ~1944 (82 года в 2026)" ]
P2_Sister --- Husband_Sofia

%% Дети Александра и Раисы – поколение 3 (бабушка Юли и тётя Наталья)
P3_Lena[ "Лена (Елена)<br/>бабушка Юли<br/>д/р 9 мая" ]
P3_Natalya[ "Наталья<br/>тётя Юли (рассказчица)" ]

P2_Father --> P3_Lena
P2_Mother --> P3_Lena
P2_Father --> P3_Natalya
P2_Mother --> P3_Natalya

%% Родители Ивана Стаховского (боковая ветвь, некровные)
Ivan_Father[ "дедушка Володя<br/>(отец Ивана)" ]
Ivan_Mother[ "Соня<br/>(мать Ивана)" ]
Ivan_Father --> Husband_Sofia
Ivan_Mother --> Husband_Sofia

%% Дети Натальи (поколение 4)
P4_Natalya_Children[ "Дети Натальи<br/>(имена не названы)" ]
P3_Natalya --> P4_Natalya_Children

%% Внучка Натальи – Агата (поколение 5 для Юли, для Натальи – внучка)
P5_Agata[ "Агата<br/>(внучка Натальи)" ]
P4_Natalya_Children --> P5_Agata

%% Дочь Лены – Ксения (поколение 4)
P4_Ksenia[ "Ксения<br/>мама Юли" ]
P3_Lena --> P4_Ksenia

%% Юля (поколение 5)
P5_Yulia[ "Юля (Вассал)<br/>адресат сообщений" ]
P4_Ksenia --> P5_Yulia

%% Подруга Софии (для справки, не кровная)
Friend_Svetlana[ "Светлана<br/>(подруга Софии)<br/>род. 22.06.1941" ]
P2_Sister -.-> Friend_Svetlana

%% Стилизация для наглядности
classDef female fill:#ffe6f0,stroke:#cc6699,stroke-width:1.5px
classDef male fill:#e6f0ff,stroke:#3399ff,stroke-width:1.5px
classDef unknown fill:#f5f5f5,stroke:#999,stroke-width:1px

class PP1_Woman1,P2_Mother,P3_Lena,P3_Natalya,P4_Ksenia,P5_Yulia,P2_Sister,PP1_Woman2,Ivan_Mother female
class PP1_Man1,P2_Father,P2_Brother,Husband_Sofia,Ivan_Father,PP1_Man2 male
class P4_Natalya_Children,P5_Agata,Friend_Svetlana unknown