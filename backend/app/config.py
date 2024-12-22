from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import Field

class Settings(BaseSettings):
    DB_HOST: str = Field(..., env='DB_HOST')
    DB_PORT: int = Field(..., env='DB_PORT')
    DB_USER: str = Field(..., env='DB_USER')
    DB_PASS: str = Field(..., env='DB_PASS')
    DB_NAME: str = Field(..., env='DB_NAME')

    @property
    def DATABASE_URL(self):
        #postgresql+asyncpg://postgres@localhost:5432/sa
        return f"postgresql+asyncpg://{self.DB_USER}:{self.DB_PASS}@{self.DB_HOST}:{self.DB_PORT}/{self.DB_NAME}"

    model_config = SettingsConfigDict(env_file=".env")

settings = Settings()