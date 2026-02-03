# Wardrobe

Веб-приложение для управления личным гардеробом, разработанное с ипользованием Angular и TypeScript. В будущем планируется добавить ИИ помощника для подбора гардероба.

## Цель проекта

Проект создан для демонстрации:

- модульной архитектуры Angular

- переиспользуемых компонентов

- защиты маршрутов и разграничения ролей

- разделения UI, бизнес-логики и инфраструктурного кода

## Структура проекта

```bash
src/
├── app/                 
│    ├── core/
│    │   ├── guards/       # Защита
│    │   │   ├── auth.guard.ts       # Проверка авторизации
│    │   │   └── admin.guard.ts      # Проверка роли админа
│    │   ├── imports/       # Общие импорты
│    │   │   └── shared.imports.ts
│    │   ├── interceptors/       # Интерсепторы
│    │   │   └── interceptor.ts
│    │   ├── layouts/
│    │   │   └── main-page/       # Страница приложения
│    │   ├── services/       # Глобальные сервисы
│    │   │   └── config-service.ts       # Сервис для api
│    │   └── core.module.ts
│    │
│    ├── modules/
│    │   ├── admin/
│    │   │   ├── pages/
│    │   │   │   ├──outfits-page/       # Таблица образов
│    │   │   │   ├──premoderation-page/       # Таблица с премодерацией образов
│    │   │   │   ├──stuffs-page/       # Таблица вещей
│    │   │   │   └──users-page/       # Таблица пользователей
│    │   │   ├── services/
│    │   │   │   ├──premoderation-service.ts/       # Сервис для премодерации     
│    │   │   │   └──users-service.ts/        # Сервис для управления пользователями
│    │   │   └──admin-module.ts       # Модуль админа (Роутинг)
│    │   ├── ai-stylist/
│    │   │   ├── components/
│    │   │   │   └──widgets/  
│    │   │   │      ├──history-chat-widget/       # Виджет для истории чата
│    │   │   │      └──initial-ai-window-widget/       # Виджет начального окна  
│    │   │   ├── pages/
│    │   │   │   └──ai-stylist-page/       # Страница ИИ стилиста
│    │   │   └──ai-stylist-module.ts       # Модуль ИИ стилиста
│    │   ├── auth/
│    │   │   ├── pages/
│    │   │   │   ├──login-page/       # Страница авторизации
│    │   │   │   └──register-page/    # Страница регистрации
│    │   │   ├── services/
│    │   │   │   └──auth.ts/        # Сервис для авторизации, регистрации, получения авторизованного пользователя, проверка на авторизацию, админа
│    │   │   └──auth-module.ts       # Модуль авторизации (Роутинг)
│    │   ├── calendar/
│    │   │   ├── pages/
│    │   │   │   └──calendar-page/    # Страница календаря
│    │   │   └──calendar-module.ts       # Модуль календаря
│    │   ├── closet/
│    │   │   ├── pages/
│    │   │   │   ├──closet-page/       # Страница одежды
│    │   │   │   ├──my-outfit-page/       # Вкладка с образами
│    │   │   │   └──my-stuff-page/    # Вкладка с вещями
│    │   │   └──closet-module.ts       # Модуль одежды (Роутинг)
│    │   ├── outfit/
│    │   │   ├── components/
│    │   │   │   └──dialogs/
│    │   │   │      └──dialog-add-edit-outfit/       # Окно редактирования и добавления образа 
│    │   │   ├── services/
│    │   │   │   └──outfit-service.ts/        # Сервис для CRUD, фильтрации образов
│    │   │   └──outfit-module.ts       # Модуль образов
│    │   ├── profile/
│    │   │   ├── components/
│    │   │   │   ├──dialogs/
│    │   │   │   │  ├──dialog-edit-profile/       # Окно редактирования профиля   
│    │   │   │   │  └──dialog-profile-settings/   # Окно редактирования настроек профиля  
│    │   │   │   └──widgets/  
│    │   │   │      ├──profile-card-widget/       # Виджет карточки профиля
│    │   │   │      └──profile-outfit-card/       # Виджет карточки образа в профиле
│    │   │   ├── pages/
│    │   │   │   ├──profile-page/     # Страница профиля
│    │   │   │   ├──user-likes/       # Вкладка с образами, которые понравились пользователю
│    │   │   │   └──user-outfits/     # Вкладка с опубликованными пользователем образами
│    │   │   ├── services/
│    │   │   │   └──profile-service.ts/        # Сервис редактирования профиля
│    │   │   └──profile-module.ts       # Модуль профиля (Роутинг)
│    │   └── stuff/
│    │   │   ├── components/
│    │   │   │   ├──dialogs/
│    │   │   │   │  ├──dialog-add-edit-stuff/          # Окно редактирования, добавления вещи
│    │   │   │   │  └──dialog-sel-stuff-for-outfits/   # Окно выбора вещи для добавления в образ
│    │   │   │   └──widgets/  
│    │   │   │      └──closet-stuff-widget/       # Виджет карточки вещи
│    │   │   ├── services/
│    │   │   │   └──outfit-service.ts/        # Сервис для CRUD, фильтрации вещей
│    │   │   └──stuff-module.ts
│    │   └── tape/
│    │   │   ├── components/
│    │   │   │   └──widgets/  
│    │   │   │      └──card-outfit/       # Виджет карточки образа для ленты
│    │   │   ├── pages/
│    │   │   │   └──tape-page/     # Страница ленты
│    │   │   └──stuff-module.ts
│    │
│    ├── pages/       # Страницы доступные всем
│    │   └── unknown-page/       # Неизвестная страница
│    └── shared/
│        ├── components/       # Общие компоненты
│        │   ├── dialogs/      # Диалоговые окна
│        │   │   └──dialog-show-outfit/      # Окно просмотра образа
│        │   ├── widgets/      # Виджеты
│        │   │   └──like-widget/      # Виджет лайка
│        │   └──shared-module.ts
│        ├── models/           # Сущности
│        │   ├──outfit/      # Модель образа
│        │   ├──publicUserInfo/      # Модель публичного пользователя
│        │   ├──stuff/      # Модель вещей
│        │   └──user/      # Модель пользователя
│        ├── services/
│        │   └── user-service/      # Сервис получения публичного пользователя
│        └──shared-module.ts
│
└── assets/
    ├── configs/       # Конфигурации (api)
    └── images/        # Иконки, изображения
        └── ...
```
