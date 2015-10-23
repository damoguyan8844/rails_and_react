# == Schema Information
#
# Table name: people
#
#  id           :integer          not null, primary key
#  first_name   :string(255)      not null
#  last_name    :string(255)
#  gender       :integer          default(0)
#  birth_date   :date
#  location     :string(255)
#  phone_number :string(255)
#  email        :string(255)
#  headline     :text(65535)
#  picture      :string(255)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class PersonSerializer < ActiveModel::Serializer
  attributes  :id,
              :first_name,
              :last_name,
              :full_name,
              :gender,
              :birth_date,
              :location,
              :phone_number,
              :email,
              :headline,
              :picture

  def full_name
    [object.first_name, object.last_name].join(' ')
  end
end
