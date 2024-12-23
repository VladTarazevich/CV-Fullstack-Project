from sqlalchemy import ForeignKey
from app.database import Base
from sqlalchemy.orm import Mapped, mapped_column
  
class Review(Base):
    __tablename__ = "Review"
  
    id: Mapped[int] = mapped_column(primary_key=True)
    userName: Mapped[str] = mapped_column()
    review: Mapped[str] = mapped_column()