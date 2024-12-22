from pydantic import BaseModel

  
class SReview(BaseModel):
    id: int
    userName: str
    review: str
  
    class Config:
        orm_mode = True