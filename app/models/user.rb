# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  display_name    :string           not null
#  business        :boolean          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :email, :password_digest, :session_token, :display_name, 
        presence: true
    validates :email, :session_token, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, length: {minimum: 6}, allow_nil: true
    validates :business, inclusion: { in: [true, false] }
    after_initialize :ensure_session_token

    attr_reader :password

    has_many :reviews,
        foreign_key: :author_id,
        class_name: :AttractionReview

    has_one_attached :profile_pic

    has_many_attached :posted_photos

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
end
